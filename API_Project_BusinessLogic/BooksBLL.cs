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
    public class BooksBLL
    {
        LibraryManagementSystemContext _context;
        IMapper _mapper;

        public BooksBLL(IMapper mapper, API_Project_DataAccessLayer.Model.LibraryManagementSystemContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<List<CategoryBO>> GetAllCategory(int? id)
        {
            List<Category> records = new List<Category>();
            if (id != null)
            {
                records = _context.Categories.Where(x => x.Active == true && x.CategoryId == id.Value).ToList();
            }
            else
            {
                records = _context.Categories.Where(x => x.Active == true).ToList();

            }
            return _mapper.Map<List<CategoryBO>>(records);
        }

        public async Task<List<AuthorBO>> GetAllAuthors(int? id)
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

        public async Task<IEnumerable<BookBO>> GetBooksByCategoryAndAuthor_ByLINQ(int? categoryId, int? authorId)
        {
            List<Book> records = new List<Book>();
            if (categoryId != null && authorId != null)
            {

                records = _context.Books.Where(x => x.CategoryId == categoryId && x.AuthorId == authorId && x.Active == true).ToList();
            }
            else
            {
                records = _context.Books.Where(x => x.Active == true).ToList();
            }

            records = GetChildObjects(records);

            return _mapper.Map<List<BookBO>>(records);
        }

        public async Task<IEnumerable<BookBO>> GetBooksByCategoryAndAuthor_ByProcedure(int? categoryId, int? authorId)
        {
            List<Book> list = new List<Book>();

            if (authorId != null)
            {
                string sql = "EXEC GetBooksByAuthorId @AuthorId";
                List<SqlParameter> parms = new List<SqlParameter>
                {
                    // Create parameter(s)    
                    new SqlParameter { ParameterName = "@AuthorId", Value = authorId }
                };

                list = _context.Books.FromSqlRaw<Book>(sql, parms.ToArray()).ToList();
            }
            else
            {
                string sql = "EXEC GetAllBooks";               

                list = _context.Books.FromSqlRaw<Book>(sql).ToList();
            }






            list = GetChildObjects(list);



            return _mapper.Map<List<BookBO>>(list);
        }


        public List<Book> GetChildObjects(List<Book> records)
        {
            foreach (Book item in records)
            {
                item.Author = _context.Authors.Where(x => x.AuthorId == item.AuthorId).FirstOrDefault();
                item.Category = _context.Categories.Where(x => x.CategoryId == item.CategoryId).FirstOrDefault();
            }
            return records;
        }



    }
}
