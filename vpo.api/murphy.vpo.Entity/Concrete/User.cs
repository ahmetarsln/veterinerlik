using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.Entity.Concrete
{
    class User
    {
        public int Id { get; set; }
        public String Username { get; set; }
        public String Email { get; set; }
        public String PoliclinicName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public Guid? ForgotPasswordGuid { get; set; }
        public DateTime? ForgotPasswordValidDate { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }

        /* EF Relations */
        public virtual ICollection<UserRole> UserRole { get; set; }
    }
}
