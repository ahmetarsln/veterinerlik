using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class ClinicalInformation : IEntity, ITrackable, ISoftDeletable
    {

        public int Id { get; set; }
        public string ClinicalName { get; set; }
        public string ClinicalEposta { get; set; }
        public string ClinicalTaxNo { get; set; }
        public string ClinicalPhone { get; set; }
        public string ClinicAddress { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }

    }
}
