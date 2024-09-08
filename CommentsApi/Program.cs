using Microsoft.EntityFrameworkCore;
using CommentsApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddDbContext<CommentContext>(options =>
	options.UseMySql(builder.Configuration.GetConnectionString("CommentContext"), 
		new MySqlServerVersion(new Version(8, 0, 21))));

builder.Services.AddCors(options => {
	options.AddPolicy("AllowAllOrigins",
		builder => {
			builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
		});
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowAllOrigins");

using (var scope = app.Services.CreateScope()) {
	var dbContext = scope.ServiceProvider.GetRequiredService<CommentContext>();
	dbContext.Database.EnsureCreated();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
	app.UseDeveloperExceptionPage();
}

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
