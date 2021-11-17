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
        public IActionResult GetByLinq(int? categoryId, int? authorId)
        {
            BooksBLL booksBLL = new BooksBLL(_mapper, _context);
            IEnumerable<BookBO> booksList = booksBLL.GetBooksByCategoryAndAuthor_ByLINQ(categoryId,authorId);

            if (booksList != null)
            {
                return Ok(booksList);
            }
            else
            {
                return BadRequest("Something went wrong, Try again later.");
            }            
        }

        [HttpGet]
        [Route("GetByProcedure")]
        public  IActionResult GetByProcedure(int? categoryId, int? authorId)
        {
            BooksBLL booksBLL = new BooksBLL(_mapper, _context);
            IEnumerable<BookBO> booksList = booksBLL.GetBooksByCategoryAndAuthor_ByProcedure(categoryId, authorId);

            if (booksList != null)
            {
                return Ok(booksList);
            }
            else
            {
                return BadRequest("Something went wrong, Try again later.");
            }
        }        
    }
}
