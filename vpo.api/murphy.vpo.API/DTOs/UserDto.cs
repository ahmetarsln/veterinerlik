﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class UserDto
    {
        public int id { get; set; }
        public String UserName { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }
    }
}
