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
    public class ClinicalInformationsController : ControllerBase
    {
        private readonly IClinicalInformationService _clinicalInformationService;
        private readonly IMapper _mapper;

        public ClinicalInformationsController(IClinicalInformationService clinicalInformationService, IMapper mapper)
        {
            _clinicalInformationService = clinicalInformationService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetClinicalInformationsAsync")]
        public async Task<ActionResult<List<ClinicalInformationDto>>> GetCompanysAsync()
        {
            var clinicalInformations = await _clinicalInformationService.GetAllAsync();
            if (clinicalInformations == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<ClinicalInformationDto>>(clinicalInformations));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetClinicalInformationByIdAsync")]
        public async Task<ActionResult<UserDto>> GetClinicalInformationByIdAsync(int id)
        {
            var clinicalInformation = await _clinicalInformationService.GetByIdAsync(id);
            if (clinicalInformation == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ClinicalInformationDto>(clinicalInformation));
        }
        // POST api/values
        [HttpPost(Name = "AddClinicalInformationAsync")]
        public async Task<ActionResult<ClinicalInformationDto>> AddClinicalInformationAsync(ClinicalInformationDto clinicalInformationDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var clinicalInformation = _mapper.Map<ClinicalInformation>(clinicalInformationDto);

            await _clinicalInformationService.AddAsync(clinicalInformation);
            return CreatedAtRoute("GetClinicalInformationByIdAsync", new { id = clinicalInformation.Id }, _mapper.Map<ClinicalInformationDto>(clinicalInformation));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateClinicalInformationAsync")]
        public async Task<ActionResult<ClinicalInformationDto>> UpdateClinicalInformationAsync(int id, [FromBody] ClinicalInformationDto clinicalInformationDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != clinicalInformationDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _clinicalInformationService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var clinicalInformation = _mapper.Map<ClinicalInformation>(clinicalInformationDto);
            await _clinicalInformationService.UpdateAsync(clinicalInformation);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveClinicalInformationAsync")]
        public async Task<ActionResult> RemoveClinicalInformationAsync(int id)
        {
            var clinicalInformationToBeDelete = await _clinicalInformationService.GetByIdAsync(id);

            if (clinicalInformationToBeDelete == null)
            {
                return NotFound();
            }
            await _clinicalInformationService.DeleteAsync(id);

            return NoContent();
        }
    }
}
