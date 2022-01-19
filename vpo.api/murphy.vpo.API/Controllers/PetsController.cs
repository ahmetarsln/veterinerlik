using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using murphy.vpo.API.DTOs;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetsController : ControllerBase
    {
        private readonly IPetService _petService;
        private readonly IMapper _mapper;

        public PetsController(IPetService petService, IMapper mapper)
        {
            _petService = petService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetPetsAsync")]
        public async Task<ActionResult<List<PetDto>>> GetCompanysAsync()
        {
            var pets = await _petService.GetAllAsync();
            if (pets == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<PetDto>>(pets));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetPetByIdAsync")]
        public async Task<ActionResult<UserDto>> GetPetByIdAsync(int id)
        {
            var pet = await _petService.GetByIdAsync(id);
            if (pet == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<PetDto>(pet));
        }
        // POST api/values
        [HttpPost(Name = "AddPetAsync")]
        public async Task<ActionResult<PetDto>> AddPetAsync(PetDto petDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var pet = _mapper.Map<Pet>(petDto);

            await _petService.AddAsync(pet);
            return CreatedAtRoute("GetPetByIdAsync", new { id = pet.Id }, _mapper.Map<PetDto>(pet));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdatePetAsync")]
        public async Task<ActionResult<PetDto>> UpdatePetAsync(int id, [FromBody] PetDto petDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != petDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _petService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var pet = _mapper.Map<Pet>(petDto);
            await _petService.UpdateAsync(pet);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemovePetAsync")]
        public async Task<ActionResult> RemovePetAsync(int id)
        {
            var petToBeDelete = await _petService.GetByIdAsync(id);

            if (petToBeDelete == null)
            {
                return NotFound();
            }
            await _petService.DeleteAsync(id);

            return NoContent();
        }
    }
}
