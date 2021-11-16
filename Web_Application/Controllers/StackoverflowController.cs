using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Web_Application.Models;

namespace Web_Application.Controllers
{
    public class StackoverflowController : Controller
    {
        public async Task<IActionResult> Index()
        {
            string stackOverflowAPI = "http://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&accepted=False&tagged=asp.net&site=stackoverflow";


            StackoverflowBO.Root questionList = new StackoverflowBO.Root();
            HttpResponseMessage response;
            try
            {
                List<KeyValuePair<string, string>> lstParams = new List<KeyValuePair<string, string>>();
                response = await (new Helpers.HttpRequestHelper().GetDataFromStackOverFlow(stackOverflowAPI));
                
                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    questionList = JsonConvert.DeserializeObject<StackoverflowBO.Root>(apiResponse);
                }
            }
            catch (Exception ex)
            {

            }
          

            return View(questionList.items);
        }
    }
}
