using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities; 

namespace murphy.vpo.Entity.Concrete
{
    public class Pet: IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string PetOwner { get; set; }
        public string PetName { get; set; }
        public string PetType { get; set; }
        public string PetBreed { get; set; }
        public string PetDateOfBirth { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
