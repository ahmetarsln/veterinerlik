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
    public class AnalysissController : ControllerBase
    {
        private readonly IAnalysisService _analysisService;
        private readonly IMapper _mapper;

        public AnalysissController(IAnalysisService analysisService, IMapper mapper)
        {
            _analysisService = analysisService;
            _mapper = mapper;
        }

        // GET api/values
        [HttpGet(Name = "GetAnalysissAsync")]
        public async Task<ActionResult<List<AnalysisDto>>> GetCompanysAsync()
        {
            var analysiss = await _analysisService.GetAllAsync();
            if (analysiss == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<AnalysisDto>>(analysiss));

        }

        // POST api/values
        [HttpPost(Name = "AddAnalysisAsync")]
        public async Task<ActionResult<AnalysisDto>> AddAnalysisAsync(AnalysisDto analysisDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var analysis = _mapper.Map<Analysis>(analysisDto);

            await _analysisService.AddAsync(analysis);
            return CreatedAtRoute("GetAnalysisByIdAsync", new { id = analysis.Id }, _mapper.Map<AnalysisDto>(analysis));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateAnalysisAsync")]
        public async Task<ActionResult<AnalysisDto>> UpdateAnalysisAsync(int id, [FromBody] AnalysisDto analysisDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != analysisDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _analysisService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var analysis = _mapper.Map<Analysis>(analysisDto);
            await _analysisService.UpdateAsync(analysis);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveAnalysisAsync")]
        public async Task<ActionResult> RemoveAnalysisAsync(int id)
        {
            var analysisToBeDelete = await _analysisService.GetByIdAsync(id);

            if (analysisToBeDelete == null)
            {
                return NotFound();
            }
            await _analysisService.DeleteAsync(id);

            return NoContent();
        }
    }
}
