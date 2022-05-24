using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class PaymentDto
    {
        public int id { get; set; }
        public string PaymentNameSurname { get; set; }
        public string PaymentTotal { get; set; }
        public string PaymentDate { get; set; }
        public string PaymentExpiryDate { get; set; }
        public string PaymentType { get; set; }
    }
}
