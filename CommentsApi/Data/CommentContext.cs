using Microsoft.EntityFrameworkCore;
using CommentsApi.Models;

namespace CommentsApi.Data {
	public class CommentContext : DbContext {
		public CommentContext(DbContextOptions<CommentContext> options) : base(options) {
			
		}

		public DbSet<Comment> Comments { get; set; }
	}
}
