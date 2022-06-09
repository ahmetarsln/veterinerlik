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
    public class InvoicesController : ControllerBase
    {
        private readonly IInvoiceService _invoiceService;
        private readonly IMapper _mapper;

        public InvoicesController(IInvoiceService invoiceService, IMapper mapper)
        {
            _invoiceService = invoiceService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetInvoicesAsync")]
        public async Task<ActionResult<List<InvoiceDto>>> GetCompanysAsync()
        {
            var invoices = await _invoiceService.GetAllAsync();
            if (invoices == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<InvoiceDto>>(invoices));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetInvoiceByIdAsync")]
        public async Task<ActionResult<UserDto>> GetInvoiceByIdAsync(int id)
        {
            var invoice = await _invoiceService.GetByIdAsync(id);
            if (invoice == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<InvoiceDto>(invoice));
        }
        // POST api/values
        [HttpPost(Name = "AddInvoiceAsync")]
        public async Task<ActionResult<InvoiceDto>> AddInvoiceAsync(InvoiceDto invoiceDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var invoice = _mapper.Map<Invoice>(invoiceDto);

            await _invoiceService.AddAsync(invoice);
            return CreatedAtRoute("GetInvoiceByIdAsync", new { id = invoice.Id }, _mapper.Map<InvoiceDto>(invoice));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateInvoiceAsync")]
        public async Task<ActionResult<InvoiceDto>> UpdateInvoiceAsync(int id, [FromBody] InvoiceDto invoiceDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != invoiceDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _invoiceService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var invoice = _mapper.Map<Invoice>(invoiceDto);
            await _invoiceService.UpdateAsync(invoice);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveInvoiceAsync")]
        public async Task<ActionResult> RemoveInvoiceAsync(int id)
        {
            var invoiceToBeDelete = await _invoiceService.GetByIdAsync(id);

            if (invoiceToBeDelete == null)
            {
                return NotFound();
            }
            await _invoiceService.DeleteAsync(id);

            return NoContent();
        }
    }
}
