export function UnderMaintenance() {
  return (
    <div className="flex flex-wrap flex-row justify-center text-center py-20 content-center gap-2 basis-0.5 maintenance">
      <div className="flex content-center flex-col justify-center">
        <span className="block text-2xl">Em Manutenção</span>
        <span className="block text-pallete-2 opacity-70">
          Under Maintenance
        </span>
      </div>
      <h1 className="text-8xl">503</h1>
      <div className="flex content-center flex-col justify-center">
        <span className="block text-2xl">Tente novamente depois</span>
        <span className="block text-pallete-2 opacity-70">Try Again Later</span>
      </div>
    </div>
  );
}
