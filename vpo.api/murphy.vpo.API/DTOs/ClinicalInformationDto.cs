using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class ClinicalInformationDto
    {
        public int id { get; set; }
        public string ClinicalName { get; set; }
        public string ClinicalEposta { get; set; }
        public string ClinicalTaxNo { get; set; }
        public string ClinicalPhone { get; set; }
        public string ClinicAddress { get; set; }
    }
}
