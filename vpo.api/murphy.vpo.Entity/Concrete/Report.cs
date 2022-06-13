using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class Report : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public int Vaccines { get; set; }
        public int Payments { get; set; }
        public int PaymentsComplate { get; set; }
        public int Treatments { get; set; }
        public int Collections { get; set; }
        public int CollectionsComplate { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
