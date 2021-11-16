using System;
using System.Collections.Generic;

#nullable disable

namespace API_Project.Models
{
    public partial class Author
    {
        public Author()
        {
            Books = new HashSet<Book>();
        }

        public int AuthorId { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Active { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Book> Books { get; set; }
    }
}
