using System;
using System.Collections.Generic;

#nullable disable

namespace Web_Application.BO
{
    public partial class CategoryBO
    {
        public CategoryBO()
        {
            Books = new HashSet<BookBO>();
        }

        public int CategoryId { get; set; }
        public string Name { get; set; }
        public bool? Active { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? CreatedBy { get; set; }

        public virtual ICollection<BookBO> Books { get; set; }
    }
}
