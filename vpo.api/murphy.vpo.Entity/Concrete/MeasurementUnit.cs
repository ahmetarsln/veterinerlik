using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class MeasurementUnit : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string MeasurementUnitName { get; set; }
        public string UnitOfMeasureValue { get; set; }
        public string MeasurementUnitDescription { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
