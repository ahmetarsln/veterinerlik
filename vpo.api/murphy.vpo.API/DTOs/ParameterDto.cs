using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class ParameterDto
    {
        public int id { get; set; }
        public string ParameterName { get; set; }
        public string ParameterLowerValue { get; set; }
        public string ParameterUpperValue { get; set; }
        public string ParameterDimension { get; set; }
        public string ParameterComment { get; set; }
    }
}
