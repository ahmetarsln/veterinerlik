using murphy.vpo.BAL.Abstract;
using murphy.vpo.DAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Concrete
{
    public class PetManager : IPetService
    {
        private readonly IPetDal _petDal;

        public PetManager(IPetDal petDal)
        {
            _petDal = petDal;
        }

        public async Task AddAsync(Pet pet)
        {
            await _petDal.AddAsync(pet, true);
        }

        public async Task DeleteAsync(int petId)
        {
            await _petDal.DeleteAsync(petId, true);
        }

        public async Task<IList<Pet>> GetAllAsync()
        {
            return await _petDal.GetAllAsync();
        }

        public async Task<Pet> GetByIdAsync(int petId)
        {
            return await _petDal.GetByIdAsync(petId);
        }

        public async Task UpdateAsync(Pet pet)
        {
            await _petDal.UpdateAsync(pet, pet.Id, true);
        }
    }
}
