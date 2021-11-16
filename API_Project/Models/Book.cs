using System;
using System.Collections.Generic;

#nullable disable

namespace API_Project.Models
{
    public partial class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Edition { get; set; }
        public double? Cost { get; set; }
        public string Remarks { get; set; }
        public int CategoryId { get; set; }
        public int AuthorId { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool? Active { get; set; }

        public virtual Author Author { get; set; }
        public virtual Category Category { get; set; }
    }
}
