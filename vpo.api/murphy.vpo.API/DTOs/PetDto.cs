using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class PetDto
    {
        public int id { get; set; }
        public string PetOwner { get; set; }
        public string PetName { get; set; }
        public string PetType { get; set; }
        public string PetBreed { get; set; }
        public string PetDateOfBirth { get; set; }
    }
}
