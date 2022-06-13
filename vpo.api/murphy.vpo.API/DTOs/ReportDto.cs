using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class ReportDto 
    {
        public int id { get; set; }
        public int Vaccines { get; set; }
        public int Payments { get; set; }
        public int PaymentsComplate { get; set; }
        public int Treatments { get; set; }
        public int Collections { get; set; }
        public int CollectionsComplate { get; set; }
    }
}
