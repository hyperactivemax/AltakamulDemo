using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Web_Application.Models;

namespace Web_Application.Helpers
{
    public class HttpRequestHelper
    {
        public static string BaseServiceURL;
        HttpResponseMessage response;
        IRestResponse restResponse;

        public async Task<HttpResponseMessage> GetDataFromServiceAsync(string controllerName, List<KeyValuePair<string, string>> queryParams)
        {
            if (string.IsNullOrEmpty(BaseServiceURL))
            {
                response = new HttpResponseMessage(System.Net.HttpStatusCode.BadRequest);
                response.Content = new StringContent("ERROR: BaseServiceURL not provided.");
            }
            else
            {
                try
                {
                    RestClient restServiceClient;
                    restServiceClient = new RestClient();

                    restServiceClient.BaseUrl = new System.Uri(BaseServiceURL);
                    var request = new RestRequest("/" + controllerName, Method.GET);
                    request.AddHeader("Content-Type", "application/json");             


                    foreach (var item in queryParams)
                    {
                        request.AddParameter(item.Key, item.Value);
                    }
                    restResponse = await restServiceClient.ExecuteAsync(request);
                    response = new HttpResponseMessage(restResponse.StatusCode);                

                    if(restResponse.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        response.Content = new StringContent(restResponse.Content, Encoding.UTF8, "application/json");
                    }               
                }
                catch (Exception ex)
                {
                    response = new HttpResponseMessage(System.Net.HttpStatusCode.BadRequest);
                    response.Content = new StringContent("ERROR: " + ex.Message);
                }
            }

            return response;
        }

        public async Task<HttpResponseMessage> GetDataFromStackOverFlow(string controllerName)
        {
            if (string.IsNullOrEmpty(BaseServiceURL))
            {
                response = new HttpResponseMessage(System.Net.HttpStatusCode.BadRequest);
                response.Content = new StringContent("ERROR: BaseServiceURL not provided.");
            }
            else
            {
                try
                {
                    RestClient restServiceClient;
                    restServiceClient = new RestClient();
                    
                    var request = new RestRequest(controllerName, Method.GET);
                    request.AddHeader("Content-Type", "application/json");
                   
                    restResponse = await restServiceClient.ExecuteAsync(request);
                    response = new HttpResponseMessage(restResponse.StatusCode);

                    if (restResponse.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        response.Content = new StringContent(restResponse.Content, Encoding.UTF8, "application/json");
                    }
                }
                catch (Exception ex)
                {
                    response = new HttpResponseMessage(System.Net.HttpStatusCode.BadRequest);
                    response.Content = new StringContent("ERROR: " + ex.Message);
                }
            }

            return response;
        }
    }
}
