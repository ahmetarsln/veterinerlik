using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class PutativeDto
    {
        public int id { get; set; }
        public string CurrencyUnit { get; set; }
        public string TaxRate { get; set; }
        public string Language { get; set; }
        public string NumberOfRecordsPerPage { get; set; }

    }
}
