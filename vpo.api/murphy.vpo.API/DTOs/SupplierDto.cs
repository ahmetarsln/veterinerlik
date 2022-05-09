using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class SupplierDto
    {
        public int id { get; set; }
        public string SupplierName { get; set; }
        public string SupplierTel { get; set; }
        public string SupplierAuth { get; set; }
        public string SupplierAdress { get; set; }
        public string SupplierCurrency { get; set; }
        public string SupplierMail { get; set; }
    }
}
