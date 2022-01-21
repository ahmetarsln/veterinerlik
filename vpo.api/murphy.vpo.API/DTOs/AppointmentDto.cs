using System;

namespace murphy.vpo.API.DTOs
{
    public class AppointmentDto
    {
        public int id { get; set; }

        public string PetName { get; set; }
        public string PetOwnerName { get; set; }
        public string AppointmentDescription { get; set; }
        public DateTime AppointmentStartDate { get; set; }
        public DateTime AppointmentEndDate { get; set; }
    }
}
