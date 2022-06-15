using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class CustomerDto
    {
        public int id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerMail { get; set; }
        public string CustomerAdress { get; set; }
        public string CustomerTel { get; set; }
        public string CustomerNote { get; set; }
    }
}
