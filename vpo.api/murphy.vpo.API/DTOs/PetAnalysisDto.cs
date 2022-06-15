using System;

namespace murphy.vpo.API.DTOs
{
    public class PetAnalysisDto
    {
        public int id { get; set; }
        public string PetName { get; set; }
        public string PetOwnerName { get; set; }
        public DateTime AnalysisDateTime { get; set; }
        public string AnalysisStatement { get; set; }
    }
}
