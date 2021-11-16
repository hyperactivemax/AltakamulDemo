using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Project_BusinessLogic;
using API_Project_BusinessObject.BO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly API_Project_DataAccessLayer.Model.LibraryManagementSystemContext _context;
        public BooksController(IMapper mapper, API_Project_DataAccessLayer.Model.LibraryManagementSystemContext context)
        {
            _mapper = mapper;
            _context = context;
        }


        // GET: api/<BooksController>1
        [HttpGet]
        [Route("GetByLinq")]
        public async Task<IEnumerable<BookBO>> GetByLinq(int? categoryId, int? authorId)
        {
            BooksBLL booksBLL = new BooksBLL(_mapper, _context);
            IEnumerable<BookBO> uploadFileBOs = await booksBLL.GetBooksByCategoryAndAuthor_ByLINQ(categoryId,authorId);

            return uploadFileBOs;
        }

        [HttpGet]
        [Route("GetByProcedure")]
        public async Task<IEnumerable<BookBO>> GetByProcedure(int? categoryId, int? authorId)
        {
            BooksBLL booksBLL = new BooksBLL(_mapper, _context);
            IEnumerable<BookBO> uploadFileBOs = await booksBLL.GetBooksByCategoryAndAuthor_ByProcedure(categoryId, authorId);

            return uploadFileBOs;
        }        
    }
}
