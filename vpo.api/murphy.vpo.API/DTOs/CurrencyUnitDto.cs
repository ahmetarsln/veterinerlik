using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class CurrencyUnitDto
    {
        public int id { get; set; }
        public string CurrencyUnitName { get; set; }
        public string CurrencyUnitCode { get; set; }
        public string CurrencyUnitRate { get; set; }
        public string CurrencyUnitActivityStatus { get; set; }
    }
}
