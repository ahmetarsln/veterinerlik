using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class Parameter : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string ParameterName { get; set; }
        public string ParameterLowerValue { get; set; }
        public string ParameterUpperValue { get; set; }
        public string ParameterDimension { get; set; }
        public string ParameterComment { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
