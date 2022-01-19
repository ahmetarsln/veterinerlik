using murphy.vpo.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.Entity.Concrete
{
    public class Appointment : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get ; set ; }

        public string PetName { get ; set ; }
        public string PetOwnerName { get ; set ; }
        public string AppointmentDescription { get ; set ; }
        public DateTime AppointmentStartDate { get ; set ; }
        public DateTime AppointmentEndDate { get ; set ; }

        public string CreatedBy { get ; set ; }
        public DateTime CreatedAt { get ; set ; }
        public string ModifiedBy { get ; set ; }
        public DateTime ModifiedAt { get ; set ; }
    }
}
