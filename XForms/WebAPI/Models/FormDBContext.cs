using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class FormDBContext : DbContext
    {
        public FormDBContext(DbContextOptions<FormDBContext> options): base(options)
        {
        }

        public DbSet<Form> Forms { get; set; }
    }
}
