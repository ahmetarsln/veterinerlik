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
    public class ReportsController : ControllerBase
    {
        private readonly IReportService _reportService;
        private readonly IMapper _mapper;

        public ReportsController(IReportService reportService, IMapper mapper)
        {
            _reportService = reportService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetReportsAsync")]
        public async Task<ActionResult<List<ReportDto>>> GetCompanysAsync()
        {
            var reports = await _reportService.GetAllAsync();
            if (reports == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<ReportDto>>(reports));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetReportByIdAsync")]
        public async Task<ActionResult<UserDto>> GetReportByIdAsync(int id)
        {
            var report = await _reportService.GetByIdAsync(id);
            if (report == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ReportDto>(report));
        }
        // POST api/values
        [HttpPost(Name = "AddReportAsync")]
        public async Task<ActionResult<ReportDto>> AddReportAsync(ReportDto reportDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var report = _mapper.Map<Report>(reportDto);

            await _reportService.AddAsync(report);
            return CreatedAtRoute("GetReportByIdAsync", new { id = report.Id }, _mapper.Map<ReportDto>(report));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateReportAsync")]
        public async Task<ActionResult<ReportDto>> UpdateReportAsync(int id, [FromBody] ReportDto reportDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != reportDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _reportService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var report = _mapper.Map<Report>(reportDto);
            await _reportService.UpdateAsync(report);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveReportAsync")]
        public async Task<ActionResult> RemoveReportAsync(int id)
        {
            var reportToBeDelete = await _reportService.GetByIdAsync(id);

            if (reportToBeDelete == null)
            {
                return NotFound();
            }
            await _reportService.DeleteAsync(id);

            return NoContent();
        }
    }
}
