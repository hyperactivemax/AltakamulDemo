using System;
using System.Collections.Generic;

#nullable disable

namespace API_Project.Models
{
    public partial class Category
    {
        public Category()
        {
            Authors = new HashSet<Author>();
            Books = new HashSet<Book>();
        }

        public int CategoryId { get; set; }
        public string Name { get; set; }
        public bool? Active { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? CreatedBy { get; set; }

        public virtual ICollection<Author> Authors { get; set; }
        public virtual ICollection<Book> Books { get; set; }
    }
}
