using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    [DataContract(IsReference = false)]
    [JsonObject(IsReference = false)]
    public class UserLoginDto
    {
        public string Username { get; set; }
        public string Password { get; set; }

    }
}
