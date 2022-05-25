using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using murphy.vpo.API.DTOs;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace murphy.vpo.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PetAnalysisController : ControllerBase
    {
        private readonly IPetAnalysisService _petAnalysisService;
        private readonly IMapper _mapper;

        public PetAnalysisController(IPetAnalysisService petAnalysisService, IMapper mapper)
        {
            _petAnalysisService = petAnalysisService;
            _mapper = mapper;
        }

        // GET api/values
        [HttpGet(Name = "GetPetAnalysissAsync")]
        public async Task<ActionResult<List<PetAnalysisDto>>> GetCompanysAsync()
        {
            var petAnalysiss = await _petAnalysisService.GetAllAsync();
            if (petAnalysiss == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<PetAnalysisDto>>(petAnalysiss));

        }

        // POST api/values
        [HttpPost(Name = "AddPetAnalysisAsync")]
        public async Task<ActionResult<PetAnalysisDto>> AddPetAnalysisAsync(PetAnalysisDto petAnalysisDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var petAnalysis = _mapper.Map<PetAnalysis>(petAnalysisDto);

            await _petAnalysisService.AddAsync(petAnalysis);
            return CreatedAtRoute("GetPetAnalysisByIdAsync", new { id = petAnalysis.Id }, _mapper.Map<PetAnalysisDto>(petAnalysis));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdatePetAnalysisAsync")]
        public async Task<ActionResult<PetAnalysisDto>> UpdatePetAnalysisAsync(int id, [FromBody] PetAnalysisDto petAnalysisDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != petAnalysisDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _petAnalysisService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var petAnalysis = _mapper.Map<PetAnalysis>(petAnalysisDto);
            await _petAnalysisService.UpdateAsync(petAnalysis);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemovePetAnalysisAsync")]
        public async Task<ActionResult> RemovePetAnalysisAsync(int id)
        {
            var petAnalysisToBeDelete = await _petAnalysisService.GetByIdAsync(id);

            if (petAnalysisToBeDelete == null)
            {
                return NotFound();
            }
            await _petAnalysisService.DeleteAsync(id);

            return NoContent();
        }
    }
}
