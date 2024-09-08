using Microsoft.AspNetCore.Mvc;
using CommentsApi.Data;
using CommentsApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;  // For DbContext, DbSet, EntityState, and async methods
using System.Threading.Tasks;         // For async/await support
using System.Collections.Generic;     // For IEnumerable<T>


namespace CommentsApi.Controllers {
	[ApiController]
	[Route("api/[controller]")]
	public class CommentsController : ControllerBase {
		private readonly CommentContext _context;

		public CommentsController(CommentContext context) {
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Comment>>> GetComments() {
			return await _context.Comments.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Comment>> GetComment(long id) {
			var comment = await _context.Comments.FindAsync(id);

			if (comment == null) {
				return NotFound();
			}

			return comment;
		}

		[HttpPost]
		public async Task<ActionResult<Comment>> PostComment(Comment comment) {
			_context.Comments.Add(comment);
			await _context.SaveChangesAsync();

			return CreatedAtAction(nameof(GetComment), new { id = comment.Id }, comment);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> PutComment(long id, Comment comment) {
			if (id != comment.Id) {
				return BadRequest();
			}

			_context.Entry(comment).State = EntityState.Modified;

			try {
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException) {
				if (!_context.Comments.Any(e => e.Id == id)) {
					return NotFound();
				}
				else {
					throw;
				}
			}

			return NoContent();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteComment(long id) {
			var comment = await _context.Comments.FindAsync(id);
			if (comment == null) {
				return NotFound();
			}

			_context.Comments.Remove(comment);
			await _context.SaveChangesAsync();

			return NoContent();
		}
	}
}
