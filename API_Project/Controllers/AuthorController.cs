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
    public class AuthorController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly API_Project_DataAccessLayer.Model.LibraryManagementSystemContext _context;
        public AuthorController(IMapper mapper, API_Project_DataAccessLayer.Model.LibraryManagementSystemContext context)
        {
            _mapper = mapper;
            _context = context;
        }


        // GET: api/<BooksController>
        [HttpGet]
        [Route("GetAllAuthors")]
        public IActionResult GetAllAuthor(int? CategoryId)
        {
            AuthorBLL authorBLL = new AuthorBLL(_mapper, _context);
            IEnumerable<AuthorBO> authorList = authorBLL.GetAllAuthors(CategoryId);

            if (authorList != null)
            {
                return Ok(authorList);
            }
            else
            {
                return BadRequest("Something went wrong, Try again later.");
            }
           
        }  
    }
}
