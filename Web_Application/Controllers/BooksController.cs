using API_Project_BusinessLogic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Web_Application.BO;

namespace Web_Application.Controllers
{
    public class BooksController : Controller
    {
        public async Task<IActionResult> Index()
        {
           
            return View();
        }
        public async Task<List<BookBO>> Get(int categoryId,int authorId)
        {           
            categoryId = 1;
            authorId = 3;

            List<BookBO> booksList = new List<BookBO>();           
            HttpResponseMessage response;
            try
            {
                List<KeyValuePair<string, string>> lstParams = new List<KeyValuePair<string, string>>();
                lstParams.Add(new KeyValuePair<string, string>("CategoryId", categoryId.ToString()));
                lstParams.Add(new KeyValuePair<string, string>("AuthorId", authorId.ToString()));
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


        public async Task<List<CategoryBO>> GetAllCategory()
        {           
            List<CategoryBO> catList = new List<CategoryBO>();
            HttpResponseMessage response;
            try
            {
                List<KeyValuePair<string, string>> lstParams = new List<KeyValuePair<string, string>>();                
                response = await (new Helpers.HttpRequestHelper().GetDataFromServiceAsync("Category/GetAllCategory", lstParams));

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

        public async Task<List<AuthorBO>> GetAllAuthors()
        {
            List<AuthorBO> authList = new List<AuthorBO>();
            HttpResponseMessage response;
            try
            {
                List<KeyValuePair<string, string>> lstParams = new List<KeyValuePair<string, string>>();
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
    }
}
