using System;
using System.Collections.Generic;

#nullable disable

namespace Web_Application.BO
{
    public partial class AuthorBO
    {

        public AuthorBO()
        {
            Books = new HashSet<BookBO>();
        }

        public int AuthorId { get; set; }
        public string Name { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Active { get; set; }
        public virtual CategoryBO Category { get; set; }
        public virtual ICollection<BookBO> Books { get; set; }
    }
}
