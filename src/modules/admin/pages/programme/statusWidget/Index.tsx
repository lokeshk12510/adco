import ContractTable from './ContractTable'
import ConstructionTable from './ConstructionTable'
import { Typography } from '@mui/material'
import { WidgetBox } from 'src/theme/StyledComponents'

const StatusWidget = () => {
    return (
        <WidgetBox>
            <header>
                <Typography>Status</Typography>

                <nav>
                    <div className="legend">
                        <span className="sp1"></span>
                        <Typography variant="body2">AHead 5+</Typography>
                    </div>
                    <div className="legend">
                        <span className="sp2"></span>
                        <Typography variant="body2">AHEAD 5d or less</Typography>
                    </div>
                    <div className="legend">
                        <span className="sp3"></span>
                        <Typography variant="body2">BEHIND</Typography>
                    </div>
                    <div className="legend">
                        <span className="sp4"></span>
                        <Typography variant="body2">BEHIND 10 Days or More</Typography>
                    </div>
                </nav>
            </header>
            <section>
                <ContractTable />
                <ConstructionTable />
            </section>
        </WidgetBox>
    )
}

export default StatusWidget
