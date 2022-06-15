using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class MeasurementUnitDto
    {
        public int id { get; set; }
        public string MeasurementUnitName { get; set; }
        public string UnitOfMeasureValue { get; set; }
        public string MeasurementUnitDescription { get; set; }
    }
}
