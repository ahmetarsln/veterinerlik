using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace murphy.vpo.API.Migrations
{
    public partial class Invoiceadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Invoices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InvoiceNumberPrefix = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InvoiceNoNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InvoiceNextNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaymentTerms = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InvoiceHeader = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InvoiceSubtitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InvoiceDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InvoiceFooter = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ModifiedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoices", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Invoices");
        }
    }
}
