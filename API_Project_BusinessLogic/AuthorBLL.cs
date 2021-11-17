using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Project_BusinessObject.BO;
using API_Project_DataAccessLayer;
using API_Project_DataAccessLayer.Model;
using AutoMapper;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace API_Project_BusinessLogic
{
    public class AuthorBLL
    {
        LibraryManagementSystemContext _context;
        IMapper _mapper;

        public AuthorBLL(IMapper mapper, API_Project_DataAccessLayer.Model.LibraryManagementSystemContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public List<AuthorBO> GetAllAuthors(int? id)
        {
            List<Author> records = new List<Author>();
            if (id != null)
            {
                records = _context.Authors.Where(x => x.Active == true && x.Category.CategoryId == id.Value).ToList();
            }
            else
            {
                records = _context.Authors.Where(x => x.Active == true).ToList();
            }
            return _mapper.Map<List<AuthorBO>>(records);
        }
    }
}
