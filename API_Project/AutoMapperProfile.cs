using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Project
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<API_Project_BusinessObject.BO.BookBO, API_Project_DataAccessLayer.Model.Book>();
            CreateMap<API_Project_DataAccessLayer.Model.Book, API_Project_BusinessObject.BO.BookBO>();

            CreateMap<API_Project_BusinessObject.BO.CategoryBO, API_Project_DataAccessLayer.Model.Category>();
            CreateMap<API_Project_DataAccessLayer.Model.Category, API_Project_BusinessObject.BO.CategoryBO>();

            CreateMap<API_Project_BusinessObject.BO.AuthorBO, API_Project_DataAccessLayer.Model.Author>();
            CreateMap<API_Project_DataAccessLayer.Model.Author, API_Project_BusinessObject.BO.AuthorBO>();
        }
    }
}
