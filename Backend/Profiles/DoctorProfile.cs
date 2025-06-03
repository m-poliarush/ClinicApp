using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Models;
using AutoMapper;
using DomainData.DB.Entities;

namespace Profiles
{
    public class DoctorProfile : Profile
    {
        public DoctorProfile() {

            CreateMap<Doctor, DoctorModel>().ReverseMap();
        
            
        }
    }
}
