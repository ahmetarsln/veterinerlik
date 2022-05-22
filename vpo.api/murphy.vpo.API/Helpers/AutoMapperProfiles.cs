using AutoMapper;
using murphy.vpo.API.DTOs;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() { 
        CreateMap<User, UserDto>().ReverseMap();
        CreateMap<Role, RoleDto>().ReverseMap();
        CreateMap<User, UserRegisterDto>().ReverseMap();
        CreateMap<User, UserLoginDto>().ReverseMap();
        CreateMap<User, UserTokenDto>().ReverseMap();

        CreateMap<UserRole, UserRoleDto>().ReverseMap();
        CreateMap<Pet, PetDto>().ReverseMap();
        CreateMap<Appointment, AppointmentDto>().ReverseMap();
        CreateMap<Customer, CustomerDto>().ReverseMap();
        }
    }
}
