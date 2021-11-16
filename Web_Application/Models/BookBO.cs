using System;
using System.Collections.Generic;

#nullable disable

namespace Web_Application.BO
{
    public partial class BookBO
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

        public virtual AuthorBO Author { get; set; }
        public virtual CategoryBO Category { get; set; }
    }
}
