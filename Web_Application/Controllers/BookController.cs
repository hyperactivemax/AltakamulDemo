using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using API_Project_DataAccessLayer.Model;
using System.Net.Http;
using API_Project_BusinessObject.BO;
using Newtonsoft.Json;

namespace Web_Application.Controllers
{
    public class BookController : Controller
    {
        private readonly LibraryManagementSystemContext _context;

        // GET: Book

        public async Task<IActionResult> Index()
        {
            List<BookBO> booksList = await GetBooksByLinq(null, null);
            return View(booksList);
        }

        public async Task<IActionResult> CascadeDropdown()
        {
            List<CategoryBO> catList = await GetAllCategory(null);
            CategoryBO categoryBO = new CategoryBO
            {
                CategoryId = 0,
                Name = "Select Category"
            };
            catList.Add(categoryBO);
            catList.OrderBy(x => x.CategoryId);
            ViewData["CategoryId"] = new SelectList(catList, "CategoryId", "Name");

            return View();
        }

        public async Task<JsonResult> GetFilterData(int? categoryId = null, int? authorId = null)
        {
            List<BookBO> booksList = await GetBooksByLinq(categoryId, authorId);
            return Json(booksList);
        }

        public async Task<IActionResult> IndexSP()
        {            
            List<BookBO> booksList = await GetBooksBySP(null, null);

            return View(booksList);
        }

        public async Task<List<BookBO>> GetBooksByLinq(int? catId, int? authId)
        {
            List<BookBO> booksList = new List<BookBO>();
            HttpResponseMessage response;
            try
            {
                List<KeyValuePair<string, string>> lstParams = new List<KeyValuePair<string, string>>();
                lstParams.Add(new KeyValuePair<string, string>("CategoryId", catId.ToString()));
                lstParams.Add(new KeyValuePair<string, string>("AuthorId", authId.ToString()));
                response = await (new Helpers.HttpRequestHelper().GetDataFromServiceAsync("Books/GetByLinq", lstParams));

                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    booksList = JsonConvert.DeserializeObject<List<BookBO>>(apiResponse);
                }
            }
            catch (Exception ex)
            {

            }

            return booksList;
        }

        public async Task<List<BookBO>> GetBooksBySP(int? catId, int? authId)
        {
            List<BookBO> booksList = new List<BookBO>();
            HttpResponseMessage response;
            try
            {
                List<KeyValuePair<string, string>> lstParams = new List<KeyValuePair<string, string>>();
                lstParams.Add(new KeyValuePair<string, string>("CategoryId", catId.ToString()));
                lstParams.Add(new KeyValuePair<string, string>("AuthorId", authId.ToString()));
                response = await (new Helpers.HttpRequestHelper().GetDataFromServiceAsync("Books/GetByProcedure", lstParams));

                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    booksList = JsonConvert.DeserializeObject<List<BookBO>>(apiResponse);
                }
            }
            catch (Exception ex)
            {

            }

            return booksList;
        }

        // GET: Book/Details/5
        public async Task<List<CategoryBO>> GetAllCategory(int? id)
        {
            List<CategoryBO> catList = new List<CategoryBO>();
            HttpResponseMessage response;
            try
            {
                List<KeyValuePair<string, string>> lstParams = new List<KeyValuePair<string, string>>();
                response = await (new Helpers.HttpRequestHelper().GetDataFromServiceAsync("Category/GetAllCategory", lstParams));
                lstParams.Add(new KeyValuePair<string, string>("CategoryId", id.ToString()));
                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    catList = JsonConvert.DeserializeObject<List<CategoryBO>>(apiResponse);
                }
            }
            catch (Exception ex)
            {

            }

            return catList;
        }

        public async Task<List<AuthorBO>> GetAllAuthors(int? id)
        {
            List<AuthorBO> authList = new List<AuthorBO>();
            HttpResponseMessage response;
            try
            {
                List<KeyValuePair<string, string>> lstParams = new List<KeyValuePair<string, string>>();
                lstParams.Add(new KeyValuePair<string, string>("AuthorId", id.ToString()));
                response = await (new Helpers.HttpRequestHelper().GetDataFromServiceAsync("Author/GetAllAuthors", lstParams));

                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    authList = JsonConvert.DeserializeObject<List<AuthorBO>>(apiResponse);
                }
            }
            catch (Exception ex)
            {

            }

            return authList;
        }

        public async Task<JsonResult> GetAllAuthorsbyCategoryId(int? id)
        {
            List<AuthorBO> authList = new List<AuthorBO>();
            HttpResponseMessage response;
            try
            {
                List<KeyValuePair<string, string>> lstParams = new List<KeyValuePair<string, string>>();
                lstParams.Add(new KeyValuePair<string, string>("CategoryId", id.ToString()));
                response = await (new Helpers.HttpRequestHelper().GetDataFromServiceAsync("Author/GetAllAuthors", lstParams));

                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    authList = JsonConvert.DeserializeObject<List<AuthorBO>>(apiResponse);
                }
            }
            catch (Exception ex)
            {

            }

            SelectList selectListItems = new SelectList(authList, "AuthorId", "Name");

            return Json(selectListItems);
        }
    }
}
