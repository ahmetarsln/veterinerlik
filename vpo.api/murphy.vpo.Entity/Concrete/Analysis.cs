using murphy.vpo.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.Entity.Concrete
{
    public class Analysis : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public string AnalysisName { get; set; }
        public string AnalysisDescription { get; set; }

    }
}
