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
    public class CategoryController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly API_Project_DataAccessLayer.Model.LibraryManagementSystemContext _context;
        public CategoryController(IMapper mapper, API_Project_DataAccessLayer.Model.LibraryManagementSystemContext context)
        {
            _mapper = mapper;
            _context = context;
        }


        // GET: api/<BooksController>
        [HttpGet]
        [Route("GetAllCategory")]
        public async Task<IEnumerable<CategoryBO>> GetAllCategory(int? CategoryId)
        {
            BooksBLL uploadFileBLL = new BooksBLL(_mapper, _context);
            IEnumerable<CategoryBO> uploadFileBOs = await uploadFileBLL.GetAllCategory(CategoryId);

            return uploadFileBOs;
        }
    }
}
